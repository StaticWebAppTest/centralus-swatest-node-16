module.exports = async function (context, req) {
  const date = "2023-06-16T00:54:25.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

