module.exports = async function (context, req) {
  const date = "2025-02-21T08:15:35.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

