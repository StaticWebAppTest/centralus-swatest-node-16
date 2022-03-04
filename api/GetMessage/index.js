module.exports = async function (context, req) {
  const date = "2022-03-04T04:12:39.527Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

