module.exports = async function (context, req) {
  const date = "2024-03-02T08:10:21.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

