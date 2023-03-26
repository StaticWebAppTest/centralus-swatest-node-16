module.exports = async function (context, req) {
  const date = "2023-03-26T21:07:35.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

