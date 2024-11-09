module.exports = async function (context, req) {
  const date = "2024-11-09T11:08:51.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

