module.exports = async function (context, req) {
  const date = "2023-01-12T02:13:07.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

