module.exports = async function (context, req) {
  const date = "2023-03-20T09:10:37.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

