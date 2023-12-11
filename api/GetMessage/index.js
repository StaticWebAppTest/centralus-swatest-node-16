module.exports = async function (context, req) {
  const date = "2023-12-11T19:07:29.082Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

