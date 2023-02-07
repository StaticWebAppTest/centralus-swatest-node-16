module.exports = async function (context, req) {
  const date = "2023-02-07T09:09:49.371Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

