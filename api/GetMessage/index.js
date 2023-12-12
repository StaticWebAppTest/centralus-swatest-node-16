module.exports = async function (context, req) {
  const date = "2023-12-12T19:07:56.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

