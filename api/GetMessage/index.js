module.exports = async function (context, req) {
  const date = "2024-02-23T19:08:42.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

