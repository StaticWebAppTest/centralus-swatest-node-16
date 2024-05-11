module.exports = async function (context, req) {
  const date = "2024-05-11T12:16:04.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

