module.exports = async function (context, req) {
  const date = "2023-12-13T19:07:37.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

