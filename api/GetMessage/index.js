module.exports = async function (context, req) {
  const date = "2023-12-10T12:15:26.992Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

