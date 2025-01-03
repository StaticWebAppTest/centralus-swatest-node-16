module.exports = async function (context, req) {
  const date = "2025-01-03T14:10:46.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

