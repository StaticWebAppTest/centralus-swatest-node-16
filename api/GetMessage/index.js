module.exports = async function (context, req) {
  const date = "2024-01-07T11:07:31.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

