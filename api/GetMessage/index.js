module.exports = async function (context, req) {
  const date = "2022-03-24T02:20:35.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

