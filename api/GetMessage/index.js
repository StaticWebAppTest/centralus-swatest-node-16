module.exports = async function (context, req) {
  const date = "2024-06-14T07:10:32.235Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

