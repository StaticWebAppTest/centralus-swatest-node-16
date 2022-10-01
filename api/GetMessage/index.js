module.exports = async function (context, req) {
  const date = "2022-10-01T07:19:26.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

