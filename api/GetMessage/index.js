module.exports = async function (context, req) {
  const date = "2023-12-13T02:24:00.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

