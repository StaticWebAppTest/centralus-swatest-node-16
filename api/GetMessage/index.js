module.exports = async function (context, req) {
  const date = "2025-05-28T19:11:02.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

