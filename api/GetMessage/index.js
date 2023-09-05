module.exports = async function (context, req) {
  const date = "2023-09-05T22:07:47.969Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

