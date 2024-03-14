module.exports = async function (context, req) {
  const date = "2024-03-14T19:07:03.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

