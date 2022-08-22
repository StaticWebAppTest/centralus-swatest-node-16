module.exports = async function (context, req) {
  const date = "2022-08-22T11:09:38.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

