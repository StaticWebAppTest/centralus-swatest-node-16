module.exports = async function (context, req) {
  const date = "2024-01-18T09:09:41.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

