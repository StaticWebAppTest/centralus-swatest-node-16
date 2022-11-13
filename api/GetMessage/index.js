module.exports = async function (context, req) {
  const date = "2022-11-13T04:25:15.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

