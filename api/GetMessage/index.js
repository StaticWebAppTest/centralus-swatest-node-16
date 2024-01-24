module.exports = async function (context, req) {
  const date = "2024-01-24T14:09:23.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

