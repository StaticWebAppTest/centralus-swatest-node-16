module.exports = async function (context, req) {
  const date = "2023-01-30T21:08:36.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

