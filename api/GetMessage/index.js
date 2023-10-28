module.exports = async function (context, req) {
  const date = "2023-10-28T03:08:56.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

