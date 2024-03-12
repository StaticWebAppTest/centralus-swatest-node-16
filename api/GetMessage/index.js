module.exports = async function (context, req) {
  const date = "2024-03-12T03:11:11.304Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

