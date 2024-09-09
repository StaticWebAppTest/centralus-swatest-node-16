module.exports = async function (context, req) {
  const date = "2024-09-09T02:11:14.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

