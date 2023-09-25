module.exports = async function (context, req) {
  const date = "2023-09-25T15:09:14.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

