module.exports = async function (context, req) {
  const date = "2024-01-23T14:09:07.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

