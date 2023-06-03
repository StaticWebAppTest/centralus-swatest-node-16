module.exports = async function (context, req) {
  const date = "2023-06-03T07:07:38.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

