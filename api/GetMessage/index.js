module.exports = async function (context, req) {
  const date = "2024-09-07T23:10:13.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

