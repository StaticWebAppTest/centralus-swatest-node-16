module.exports = async function (context, req) {
  const date = "2023-08-01T18:10:51.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

