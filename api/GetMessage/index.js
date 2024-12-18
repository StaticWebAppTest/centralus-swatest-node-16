module.exports = async function (context, req) {
  const date = "2024-12-18T14:11:43.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

