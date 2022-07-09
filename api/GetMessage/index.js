module.exports = async function (context, req) {
  const date = "2022-07-09T04:15:58.646Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

