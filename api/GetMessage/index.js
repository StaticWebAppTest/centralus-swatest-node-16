module.exports = async function (context, req) {
  const date = "2023-08-24T17:07:42.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

