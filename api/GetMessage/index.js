module.exports = async function (context, req) {
  const date = "2024-09-05T17:10:02.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

