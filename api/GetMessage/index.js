module.exports = async function (context, req) {
  const date = "2024-12-08T12:22:24.073Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

