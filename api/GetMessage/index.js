module.exports = async function (context, req) {
  const date = "2023-02-17T21:08:40.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

