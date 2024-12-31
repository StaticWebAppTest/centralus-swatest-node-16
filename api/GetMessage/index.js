module.exports = async function (context, req) {
  const date = "2024-12-31T14:10:26.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

