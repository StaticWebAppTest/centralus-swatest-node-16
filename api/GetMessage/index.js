module.exports = async function (context, req) {
  const date = "2023-06-14T12:17:26.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

