module.exports = async function (context, req) {
  const date = "2023-06-12T00:57:32.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

