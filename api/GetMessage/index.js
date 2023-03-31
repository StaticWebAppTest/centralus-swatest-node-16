module.exports = async function (context, req) {
  const date = "2023-03-31T09:09:11.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

