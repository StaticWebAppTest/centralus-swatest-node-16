module.exports = async function (context, req) {
  const date = "2024-09-01T09:11:20.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

