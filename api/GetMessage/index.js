module.exports = async function (context, req) {
  const date = "2024-11-27T21:11:35.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

