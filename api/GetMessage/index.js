module.exports = async function (context, req) {
  const date = "2024-11-25T18:16:37.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

