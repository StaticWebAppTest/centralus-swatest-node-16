module.exports = async function (context, req) {
  const date = "2024-11-10T17:09:14.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

