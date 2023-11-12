module.exports = async function (context, req) {
  const date = "2023-11-12T01:52:28.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

