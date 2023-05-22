module.exports = async function (context, req) {
  const date = "2023-05-22T04:10:48.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

