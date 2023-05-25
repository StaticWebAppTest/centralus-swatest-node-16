module.exports = async function (context, req) {
  const date = "2023-05-25T03:09:43.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

