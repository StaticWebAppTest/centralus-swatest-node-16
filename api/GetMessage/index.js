module.exports = async function (context, req) {
  const date = "2022-03-05T03:09:47.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

