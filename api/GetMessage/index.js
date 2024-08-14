module.exports = async function (context, req) {
  const date = "2024-08-14T04:13:04.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

