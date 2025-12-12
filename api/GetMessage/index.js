module.exports = async function (context, req) {
  const date = "2025-12-12T09:18:53.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

