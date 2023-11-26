module.exports = async function (context, req) {
  const date = "2023-11-26T21:08:09.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

