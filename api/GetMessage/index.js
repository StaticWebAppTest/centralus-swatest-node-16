module.exports = async function (context, req) {
  const date = "2023-11-03T04:10:47.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

