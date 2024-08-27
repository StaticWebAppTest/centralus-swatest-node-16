module.exports = async function (context, req) {
  const date = "2024-08-27T18:14:22.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

