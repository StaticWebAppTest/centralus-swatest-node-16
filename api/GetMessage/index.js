module.exports = async function (context, req) {
  const date = "2024-05-13T20:09:53.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

