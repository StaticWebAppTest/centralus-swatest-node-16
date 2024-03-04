module.exports = async function (context, req) {
  const date = "2024-03-04T22:08:06.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

