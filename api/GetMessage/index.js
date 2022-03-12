module.exports = async function (context, req) {
  const date = "2022-03-12T05:08:47.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

