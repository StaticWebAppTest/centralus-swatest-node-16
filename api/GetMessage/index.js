module.exports = async function (context, req) {
  const date = "2023-12-17T14:07:43.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

