module.exports = async function (context, req) {
  const date = "2024-02-26T05:09:47.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

