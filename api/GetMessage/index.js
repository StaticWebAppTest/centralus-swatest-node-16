module.exports = async function (context, req) {
  const date = "2025-10-14T11:11:03.885Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

