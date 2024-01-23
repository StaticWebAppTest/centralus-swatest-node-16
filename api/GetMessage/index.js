module.exports = async function (context, req) {
  const date = "2024-01-23T23:09:42.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

