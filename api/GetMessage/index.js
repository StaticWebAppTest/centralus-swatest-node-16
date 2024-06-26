module.exports = async function (context, req) {
  const date = "2024-06-26T14:09:23.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

