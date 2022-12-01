module.exports = async function (context, req) {
  const date = "2022-12-01T13:28:55.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

