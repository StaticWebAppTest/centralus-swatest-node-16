module.exports = async function (context, req) {
  const date = "2025-05-25T19:09:44.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

