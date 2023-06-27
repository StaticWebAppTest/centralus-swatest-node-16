module.exports = async function (context, req) {
  const date = "2023-06-27T03:23:44.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

