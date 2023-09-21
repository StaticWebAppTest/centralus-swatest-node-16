module.exports = async function (context, req) {
  const date = "2023-09-21T13:12:00.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

