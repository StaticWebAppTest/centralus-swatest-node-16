module.exports = async function (context, req) {
  const date = "2024-06-25T11:09:17.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

