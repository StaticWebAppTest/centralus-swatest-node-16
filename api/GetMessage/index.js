module.exports = async function (context, req) {
  const date = "2024-09-12T17:10:25.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

