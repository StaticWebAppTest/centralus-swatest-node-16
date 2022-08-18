module.exports = async function (context, req) {
  const date = "2022-08-18T05:33:04.555Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

