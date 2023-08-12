module.exports = async function (context, req) {
  const date = "2023-08-12T17:06:28.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

