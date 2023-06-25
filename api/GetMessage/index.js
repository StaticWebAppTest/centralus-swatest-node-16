module.exports = async function (context, req) {
  const date = "2023-06-25T07:09:17.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

