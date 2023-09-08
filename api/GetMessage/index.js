module.exports = async function (context, req) {
  const date = "2023-09-08T04:10:36.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

