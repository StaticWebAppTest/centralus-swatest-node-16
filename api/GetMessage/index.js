module.exports = async function (context, req) {
  const date = "2022-04-04T08:13:19.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

