module.exports = async function (context, req) {
  const date = "2024-04-28T03:10:48.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

