module.exports = async function (context, req) {
  const date = "2022-09-04T07:10:24.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

