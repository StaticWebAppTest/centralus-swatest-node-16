module.exports = async function (context, req) {
  const date = "2025-03-28T21:11:08.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

