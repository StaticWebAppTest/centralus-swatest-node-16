module.exports = async function (context, req) {
  const date = "2023-09-27T09:08:51.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

