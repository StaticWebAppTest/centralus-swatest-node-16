module.exports = async function (context, req) {
  const date = "2022-04-04T05:09:57.632Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

