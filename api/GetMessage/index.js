module.exports = async function (context, req) {
  const date = "2024-01-16T00:44:00.866Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

