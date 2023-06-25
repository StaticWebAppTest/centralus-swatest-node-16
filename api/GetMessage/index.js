module.exports = async function (context, req) {
  const date = "2023-06-25T17:08:29.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

