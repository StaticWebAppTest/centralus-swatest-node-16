module.exports = async function (context, req) {
  const date = "2024-04-06T07:08:47.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

