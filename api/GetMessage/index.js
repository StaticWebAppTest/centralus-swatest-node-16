module.exports = async function (context, req) {
  const date = "2024-05-15T14:10:31.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

