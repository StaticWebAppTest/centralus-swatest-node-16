module.exports = async function (context, req) {
  const date = "2022-11-27T03:35:37.654Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

