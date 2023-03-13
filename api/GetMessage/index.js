module.exports = async function (context, req) {
  const date = "2023-03-13T16:13:29.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

