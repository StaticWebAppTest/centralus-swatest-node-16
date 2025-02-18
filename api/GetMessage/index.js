module.exports = async function (context, req) {
  const date = "2025-02-18T13:18:34.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

