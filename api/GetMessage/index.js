module.exports = async function (context, req) {
  const date = "2023-08-08T04:10:25.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

