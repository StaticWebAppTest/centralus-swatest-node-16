module.exports = async function (context, req) {
  const date = "2024-07-07T17:09:14.257Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

