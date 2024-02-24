module.exports = async function (context, req) {
  const date = "2024-02-24T11:07:08.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

