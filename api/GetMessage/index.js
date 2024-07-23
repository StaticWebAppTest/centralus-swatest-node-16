module.exports = async function (context, req) {
  const date = "2024-07-23T16:14:35.465Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

