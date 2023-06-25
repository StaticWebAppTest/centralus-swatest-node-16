module.exports = async function (context, req) {
  const date = "2023-06-25T15:09:17.310Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

