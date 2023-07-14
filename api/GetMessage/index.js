module.exports = async function (context, req) {
  const date = "2023-07-14T10:10:22.958Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

