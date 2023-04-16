module.exports = async function (context, req) {
  const date = "2023-04-16T17:07:15.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

