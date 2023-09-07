module.exports = async function (context, req) {
  const date = "2023-09-07T22:07:51.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

