module.exports = async function (context, req) {
  const date = "2024-08-21T07:10:20.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

