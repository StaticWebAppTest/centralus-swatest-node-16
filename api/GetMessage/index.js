module.exports = async function (context, req) {
  const date = "2022-06-18T05:08:54.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

