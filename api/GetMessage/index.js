module.exports = async function (context, req) {
  const date = "2024-12-08T20:12:38.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

