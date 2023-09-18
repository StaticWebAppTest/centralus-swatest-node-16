module.exports = async function (context, req) {
  const date = "2023-09-18T07:08:38.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

