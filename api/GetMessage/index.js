module.exports = async function (context, req) {
  const date = "2025-01-19T09:10:33.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

