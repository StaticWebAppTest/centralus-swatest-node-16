module.exports = async function (context, req) {
  const date = "2024-03-12T05:10:35.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

