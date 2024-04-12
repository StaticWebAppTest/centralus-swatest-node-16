module.exports = async function (context, req) {
  const date = "2024-04-12T15:09:03.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

