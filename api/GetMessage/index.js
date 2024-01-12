module.exports = async function (context, req) {
  const date = "2024-01-12T17:08:39.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

