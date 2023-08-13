module.exports = async function (context, req) {
  const date = "2023-08-13T01:41:46.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

