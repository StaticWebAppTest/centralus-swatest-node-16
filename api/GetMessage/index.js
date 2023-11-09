module.exports = async function (context, req) {
  const date = "2023-11-09T06:13:29.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

