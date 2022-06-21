module.exports = async function (context, req) {
  const date = "2022-06-21T04:28:22.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

