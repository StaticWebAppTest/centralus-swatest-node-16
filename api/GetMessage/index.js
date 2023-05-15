module.exports = async function (context, req) {
  const date = "2023-05-15T19:06:46.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

