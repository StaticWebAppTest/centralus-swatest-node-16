module.exports = async function (context, req) {
  const date = "2024-05-08T00:36:23.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

