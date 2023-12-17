module.exports = async function (context, req) {
  const date = "2023-12-17T11:07:00.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

