module.exports = async function (context, req) {
  const date = "2024-06-21T23:09:20.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

