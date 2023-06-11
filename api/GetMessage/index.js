module.exports = async function (context, req) {
  const date = "2023-06-11T16:10:17.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

