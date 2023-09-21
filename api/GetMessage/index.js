module.exports = async function (context, req) {
  const date = "2023-09-21T06:11:56.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

