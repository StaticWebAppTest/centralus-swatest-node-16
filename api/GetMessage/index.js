module.exports = async function (context, req) {
  const date = "2024-09-14T15:10:26.917Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

