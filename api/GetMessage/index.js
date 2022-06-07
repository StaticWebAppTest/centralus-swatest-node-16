module.exports = async function (context, req) {
  const date = "2022-06-07T21:09:10.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

