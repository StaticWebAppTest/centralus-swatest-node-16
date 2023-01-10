module.exports = async function (context, req) {
  const date = "2023-01-10T21:09:02.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

