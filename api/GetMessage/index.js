module.exports = async function (context, req) {
  const date = "2024-05-24T01:53:11.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

