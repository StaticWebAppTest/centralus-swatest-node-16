module.exports = async function (context, req) {
  const date = "2024-10-14T18:15:35.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

