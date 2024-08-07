module.exports = async function (context, req) {
  const date = "2024-08-07T02:02:58.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

