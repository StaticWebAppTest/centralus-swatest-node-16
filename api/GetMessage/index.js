module.exports = async function (context, req) {
  const date = "2023-08-25T05:08:09.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

