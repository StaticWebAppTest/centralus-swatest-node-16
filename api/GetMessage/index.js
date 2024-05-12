module.exports = async function (context, req) {
  const date = "2024-05-12T10:09:10.309Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

