module.exports = async function (context, req) {
  const date = "2024-03-24T14:07:23.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

