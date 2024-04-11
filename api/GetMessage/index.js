module.exports = async function (context, req) {
  const date = "2024-04-11T23:10:35.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

