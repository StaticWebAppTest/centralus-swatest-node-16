module.exports = async function (context, req) {
  const date = "2024-07-18T14:09:58.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

