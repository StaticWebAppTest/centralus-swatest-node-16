module.exports = async function (context, req) {
  const date = "2022-09-28T06:03:06.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

