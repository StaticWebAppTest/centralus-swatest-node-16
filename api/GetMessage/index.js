module.exports = async function (context, req) {
  const date = "2023-08-04T01:57:28.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

