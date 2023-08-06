module.exports = async function (context, req) {
  const date = "2023-08-06T17:06:47.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

