module.exports = async function (context, req) {
  const date = "2024-02-19T23:08:39.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

