module.exports = async function (context, req) {
  const date = "2023-12-31T00:46:55.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

