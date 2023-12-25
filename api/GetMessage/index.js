module.exports = async function (context, req) {
  const date = "2023-12-25T03:10:04.065Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

