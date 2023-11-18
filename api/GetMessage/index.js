module.exports = async function (context, req) {
  const date = "2023-11-18T05:08:17.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

