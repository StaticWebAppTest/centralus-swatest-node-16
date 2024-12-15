module.exports = async function (context, req) {
  const date = "2024-12-15T05:11:57.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

