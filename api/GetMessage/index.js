module.exports = async function (context, req) {
  const date = "2023-11-08T21:08:01.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

