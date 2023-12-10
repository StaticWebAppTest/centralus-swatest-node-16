module.exports = async function (context, req) {
  const date = "2023-12-10T11:07:02.614Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

