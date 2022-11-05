module.exports = async function (context, req) {
  const date = "2022-11-05T08:14:09.028Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

