module.exports = async function (context, req) {
  const date = "2023-01-01T05:08:16.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

