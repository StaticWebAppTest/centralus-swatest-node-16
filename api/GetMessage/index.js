module.exports = async function (context, req) {
  const date = "2022-08-24T21:09:58.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

