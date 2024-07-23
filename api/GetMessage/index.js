module.exports = async function (context, req) {
  const date = "2024-07-23T02:36:46.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

