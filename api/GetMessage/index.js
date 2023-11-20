module.exports = async function (context, req) {
  const date = "2023-11-20T12:18:06.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

