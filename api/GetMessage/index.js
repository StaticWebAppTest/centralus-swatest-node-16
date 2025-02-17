module.exports = async function (context, req) {
  const date = "2025-02-17T18:15:50.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

