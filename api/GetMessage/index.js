module.exports = async function (context, req) {
  const date = "2024-06-18T22:09:03.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

