module.exports = async function (context, req) {
  const date = "2023-08-31T22:07:42.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

