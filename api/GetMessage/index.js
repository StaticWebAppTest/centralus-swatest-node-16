module.exports = async function (context, req) {
  const date = "2022-04-13T12:17:59.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

