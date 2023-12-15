module.exports = async function (context, req) {
  const date = "2023-12-15T01:52:57.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

