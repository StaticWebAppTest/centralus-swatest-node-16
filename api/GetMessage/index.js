module.exports = async function (context, req) {
  const date = "2022-11-12T04:22:58.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

