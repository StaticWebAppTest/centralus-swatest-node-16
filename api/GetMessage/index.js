module.exports = async function (context, req) {
  const date = "2023-01-11T13:20:38.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

