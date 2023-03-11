module.exports = async function (context, req) {
  const date = "2023-03-11T19:07:26.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

