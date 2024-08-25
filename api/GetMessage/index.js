module.exports = async function (context, req) {
  const date = "2024-08-25T23:10:51.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

