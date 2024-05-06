module.exports = async function (context, req) {
  const date = "2024-05-06T21:09:37.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

