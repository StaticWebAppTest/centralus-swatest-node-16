module.exports = async function (context, req) {
  const date = "2023-05-14T07:07:39.584Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

