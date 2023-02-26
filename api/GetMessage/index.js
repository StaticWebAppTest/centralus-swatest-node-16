module.exports = async function (context, req) {
  const date = "2023-02-26T12:17:42.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

