module.exports = async function (context, req) {
  const date = "2023-05-20T11:06:57.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

