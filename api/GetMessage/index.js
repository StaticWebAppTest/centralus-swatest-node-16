module.exports = async function (context, req) {
  const date = "2023-11-08T10:09:29.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

