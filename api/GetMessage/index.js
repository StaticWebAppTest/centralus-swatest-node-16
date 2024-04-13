module.exports = async function (context, req) {
  const date = "2024-04-13T07:09:37.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

