module.exports = async function (context, req) {
  const date = "2024-03-25T23:08:53.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

