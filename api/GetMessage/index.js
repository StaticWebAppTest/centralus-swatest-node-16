module.exports = async function (context, req) {
  const date = "2024-01-09T17:08:38.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

