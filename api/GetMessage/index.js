module.exports = async function (context, req) {
  const date = "2025-01-25T11:09:22.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

