module.exports = async function (context, req) {
  const date = "2022-12-18T05:08:21.080Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

