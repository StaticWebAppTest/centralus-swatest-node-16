module.exports = async function (context, req) {
  const date = "2023-09-07T15:09:58.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

