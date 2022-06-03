module.exports = async function (context, req) {
  const date = "2022-06-03T04:13:47.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

