module.exports = async function (context, req) {
  const date = "2024-09-08T18:14:31.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

