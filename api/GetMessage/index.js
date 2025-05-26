module.exports = async function (context, req) {
  const date = "2025-05-26T23:12:18.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

