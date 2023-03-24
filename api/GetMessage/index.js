module.exports = async function (context, req) {
  const date = "2023-03-24T14:08:52.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

