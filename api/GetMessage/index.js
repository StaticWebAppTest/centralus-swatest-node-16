module.exports = async function (context, req) {
  const date = "2024-03-14T10:09:52.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

