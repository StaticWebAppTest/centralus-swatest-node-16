module.exports = async function (context, req) {
  const date = "2024-04-23T07:09:03.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

