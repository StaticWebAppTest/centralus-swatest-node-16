module.exports = async function (context, req) {
  const date = "2023-12-14T06:12:25.599Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

