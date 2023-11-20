module.exports = async function (context, req) {
  const date = "2023-11-20T10:10:34.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

