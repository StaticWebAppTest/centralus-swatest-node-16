module.exports = async function (context, req) {
  const date = "2023-11-30T21:08:29.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

