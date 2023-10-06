module.exports = async function (context, req) {
  const date = "2023-10-06T16:11:28.612Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

