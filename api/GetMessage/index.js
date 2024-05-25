module.exports = async function (context, req) {
  const date = "2024-05-25T16:10:57.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

