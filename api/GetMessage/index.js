module.exports = async function (context, req) {
  const date = "2024-12-28T21:09:34.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

