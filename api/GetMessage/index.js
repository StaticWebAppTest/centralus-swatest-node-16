module.exports = async function (context, req) {
  const date = "2025-02-18T11:09:57.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

