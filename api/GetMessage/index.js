module.exports = async function (context, req) {
  const date = "2024-02-22T18:11:33.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

