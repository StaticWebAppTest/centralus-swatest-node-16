module.exports = async function (context, req) {
  const date = "2022-12-17T05:08:06.404Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

