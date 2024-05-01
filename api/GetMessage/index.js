module.exports = async function (context, req) {
  const date = "2024-05-01T11:07:45.812Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

