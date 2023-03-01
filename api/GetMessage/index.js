module.exports = async function (context, req) {
  const date = "2023-03-01T05:09:51.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

