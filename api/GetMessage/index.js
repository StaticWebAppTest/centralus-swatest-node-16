module.exports = async function (context, req) {
  const date = "2023-01-24T05:08:38.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

