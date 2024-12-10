module.exports = async function (context, req) {
  const date = "2024-12-10T21:11:39.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

