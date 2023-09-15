module.exports = async function (context, req) {
  const date = "2023-09-15T07:08:23.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

