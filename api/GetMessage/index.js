module.exports = async function (context, req) {
  const date = "2024-08-01T11:09:30.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

