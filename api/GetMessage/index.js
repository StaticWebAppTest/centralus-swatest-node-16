module.exports = async function (context, req) {
  const date = "2024-04-26T18:11:35.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

