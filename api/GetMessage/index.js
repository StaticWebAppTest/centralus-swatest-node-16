module.exports = async function (context, req) {
  const date = "2025-03-10T23:11:23.014Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

