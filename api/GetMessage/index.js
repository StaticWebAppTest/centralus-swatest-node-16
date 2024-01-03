module.exports = async function (context, req) {
  const date = "2024-01-03T18:12:00.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

