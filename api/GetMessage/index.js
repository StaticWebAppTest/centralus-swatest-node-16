module.exports = async function (context, req) {
  const date = "2024-12-15T23:11:40.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

