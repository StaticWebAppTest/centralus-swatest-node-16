module.exports = async function (context, req) {
  const date = "2023-04-13T19:07:12.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

