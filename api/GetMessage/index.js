module.exports = async function (context, req) {
  const date = "2023-05-12T01:57:32.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

