module.exports = async function (context, req) {
  const date = "2024-02-21T18:10:59.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

