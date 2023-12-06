module.exports = async function (context, req) {
  const date = "2023-12-06T11:08:06.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

