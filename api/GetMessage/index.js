module.exports = async function (context, req) {
  const date = "2023-10-25T03:09:28.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

