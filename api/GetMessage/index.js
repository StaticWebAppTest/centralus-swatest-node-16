module.exports = async function (context, req) {
  const date = "2023-05-14T18:09:35.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

