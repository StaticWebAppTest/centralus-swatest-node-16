module.exports = async function (context, req) {
  const date = "2023-09-30T19:06:13.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

