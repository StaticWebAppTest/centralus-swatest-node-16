module.exports = async function (context, req) {
  const date = "2025-06-15T11:10:25.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

