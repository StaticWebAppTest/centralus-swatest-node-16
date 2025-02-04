module.exports = async function (context, req) {
  const date = "2025-02-04T18:15:49.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

