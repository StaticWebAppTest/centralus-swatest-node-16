module.exports = async function (context, req) {
  const date = "2022-03-21T17:13:01.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

