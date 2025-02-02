module.exports = async function (context, req) {
  const date = "2025-02-02T11:08:08.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

