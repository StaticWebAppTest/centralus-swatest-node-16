module.exports = async function (context, req) {
  const date = "2023-09-15T11:06:57.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

