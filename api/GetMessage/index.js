module.exports = async function (context, req) {
  const date = "2023-12-04T01:52:48.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

