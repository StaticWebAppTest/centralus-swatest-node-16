module.exports = async function (context, req) {
  const date = "2023-05-20T03:09:07.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

