module.exports = async function (context, req) {
  const date = "2022-11-07T22:11:22.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

