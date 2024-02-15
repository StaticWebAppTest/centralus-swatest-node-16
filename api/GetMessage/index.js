module.exports = async function (context, req) {
  const date = "2024-02-15T14:08:01.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

