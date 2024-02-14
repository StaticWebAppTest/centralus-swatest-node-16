module.exports = async function (context, req) {
  const date = "2024-02-14T17:08:14.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

