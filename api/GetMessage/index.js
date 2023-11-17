module.exports = async function (context, req) {
  const date = "2023-11-17T16:13:14.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

