module.exports = async function (context, req) {
  const date = "2024-04-04T23:09:55.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

