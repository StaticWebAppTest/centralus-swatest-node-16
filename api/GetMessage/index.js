module.exports = async function (context, req) {
  const date = "2024-05-25T12:16:59.276Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

