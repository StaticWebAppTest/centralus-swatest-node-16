module.exports = async function (context, req) {
  const date = "2022-05-31T05:17:36.285Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

