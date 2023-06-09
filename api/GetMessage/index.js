module.exports = async function (context, req) {
  const date = "2023-06-09T21:07:37.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

