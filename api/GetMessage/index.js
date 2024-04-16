module.exports = async function (context, req) {
  const date = "2024-04-16T18:11:39.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

