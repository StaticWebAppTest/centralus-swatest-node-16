module.exports = async function (context, req) {
  const date = "2023-11-17T11:07:47.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

