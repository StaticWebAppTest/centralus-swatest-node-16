module.exports = async function (context, req) {
  const date = "2024-01-17T11:08:03.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

