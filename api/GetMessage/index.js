module.exports = async function (context, req) {
  const date = "2022-06-17T04:24:30.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

