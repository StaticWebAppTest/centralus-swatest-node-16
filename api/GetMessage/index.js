module.exports = async function (context, req) {
  const date = "2024-07-22T12:19:57.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

