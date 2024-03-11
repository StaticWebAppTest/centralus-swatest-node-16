module.exports = async function (context, req) {
  const date = "2024-03-11T19:07:38.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

