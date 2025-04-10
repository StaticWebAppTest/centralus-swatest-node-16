module.exports = async function (context, req) {
  const date = "2025-04-10T13:23:33.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

