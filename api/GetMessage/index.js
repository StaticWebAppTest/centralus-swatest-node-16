module.exports = async function (context, req) {
  const date = "2024-04-20T05:09:30.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

