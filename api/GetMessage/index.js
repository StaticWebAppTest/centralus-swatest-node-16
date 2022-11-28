module.exports = async function (context, req) {
  const date = "2022-11-28T05:10:11.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

