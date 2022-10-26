module.exports = async function (context, req) {
  const date = "2022-10-26T10:12:51.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

