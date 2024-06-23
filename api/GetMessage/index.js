module.exports = async function (context, req) {
  const date = "2024-06-23T17:08:06.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

