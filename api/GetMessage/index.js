module.exports = async function (context, req) {
  const date = "2022-11-09T13:39:59.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

