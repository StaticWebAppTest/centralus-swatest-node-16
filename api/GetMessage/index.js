module.exports = async function (context, req) {
  const date = "2024-08-03T01:58:19.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

