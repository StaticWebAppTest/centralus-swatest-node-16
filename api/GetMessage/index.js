module.exports = async function (context, req) {
  const date = "2024-09-18T12:21:16.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

