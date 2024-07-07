module.exports = async function (context, req) {
  const date = "2024-07-07T23:10:26.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

