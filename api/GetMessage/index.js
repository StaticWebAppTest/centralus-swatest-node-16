module.exports = async function (context, req) {
  const date = "2024-07-13T23:09:20.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

