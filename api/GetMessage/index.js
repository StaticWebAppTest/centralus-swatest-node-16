module.exports = async function (context, req) {
  const date = "2023-06-25T11:08:38.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

