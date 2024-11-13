module.exports = async function (context, req) {
  const date = "2024-11-13T14:11:18.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

