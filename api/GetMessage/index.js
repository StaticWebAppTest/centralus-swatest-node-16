module.exports = async function (context, req) {
  const date = "2025-08-27T05:12:54.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

