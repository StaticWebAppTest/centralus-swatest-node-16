module.exports = async function (context, req) {
  const date = "2023-12-21T01:50:16.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

