module.exports = async function (context, req) {
  const date = "2025-01-25T00:52:32.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

