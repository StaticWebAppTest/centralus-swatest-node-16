module.exports = async function (context, req) {
  const date = "2023-06-21T10:09:12.378Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

