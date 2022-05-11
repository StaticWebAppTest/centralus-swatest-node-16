module.exports = async function (context, req) {
  const date = "2022-05-11T16:16:19.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

