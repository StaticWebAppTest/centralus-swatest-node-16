module.exports = async function (context, req) {
  const date = "2023-07-12T14:09:13.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

