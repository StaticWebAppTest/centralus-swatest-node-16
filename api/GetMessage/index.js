module.exports = async function (context, req) {
  const date = "2023-05-18T07:08:00.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

