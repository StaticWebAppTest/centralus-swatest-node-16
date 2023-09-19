module.exports = async function (context, req) {
  const date = "2023-09-19T05:08:22.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

