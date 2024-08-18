module.exports = async function (context, req) {
  const date = "2024-08-18T15:09:37.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

