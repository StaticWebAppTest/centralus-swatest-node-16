module.exports = async function (context, req) {
  const date = "2024-02-27T17:09:44.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

