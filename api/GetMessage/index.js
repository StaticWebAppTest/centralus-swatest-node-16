module.exports = async function (context, req) {
  const date = "2023-03-15T14:09:18.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

