module.exports = async function (context, req) {
  const date = "2025-01-19T18:13:52.606Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

