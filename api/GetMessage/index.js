module.exports = async function (context, req) {
  const date = "2024-05-25T23:09:13.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

