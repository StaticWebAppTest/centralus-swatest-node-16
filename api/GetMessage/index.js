module.exports = async function (context, req) {
  const date = "2024-08-13T17:10:05.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

