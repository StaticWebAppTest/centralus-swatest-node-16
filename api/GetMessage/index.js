module.exports = async function (context, req) {
  const date = "2023-03-28T16:18:18.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

