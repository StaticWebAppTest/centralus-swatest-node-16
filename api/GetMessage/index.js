module.exports = async function (context, req) {
  const date = "2022-12-30T16:11:39.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

