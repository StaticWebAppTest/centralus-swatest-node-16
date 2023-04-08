module.exports = async function (context, req) {
  const date = "2023-04-08T03:09:14.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

