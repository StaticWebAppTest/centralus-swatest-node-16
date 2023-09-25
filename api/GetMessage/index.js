module.exports = async function (context, req) {
  const date = "2023-09-25T10:09:37.413Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

