module.exports = async function (context, req) {
  const date = "2023-10-10T20:07:58.523Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

