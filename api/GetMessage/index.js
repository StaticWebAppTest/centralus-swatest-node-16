module.exports = async function (context, req) {
  const date = "2023-08-26T16:09:38.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

