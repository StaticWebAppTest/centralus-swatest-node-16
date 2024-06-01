module.exports = async function (context, req) {
  const date = "2024-06-01T13:09:35.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

