module.exports = async function (context, req) {
  const date = "2023-12-12T12:17:31.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

