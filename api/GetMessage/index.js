module.exports = async function (context, req) {
  const date = "2022-08-05T05:27:50.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

