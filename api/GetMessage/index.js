module.exports = async function (context, req) {
  const date = "2023-05-14T00:51:05.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

