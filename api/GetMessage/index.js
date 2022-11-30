module.exports = async function (context, req) {
  const date = "2022-11-30T16:14:16.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

