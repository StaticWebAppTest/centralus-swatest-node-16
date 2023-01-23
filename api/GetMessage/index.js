module.exports = async function (context, req) {
  const date = "2023-01-23T18:10:51.889Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

