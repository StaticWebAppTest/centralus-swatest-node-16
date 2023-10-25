module.exports = async function (context, req) {
  const date = "2023-10-25T07:08:17.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

