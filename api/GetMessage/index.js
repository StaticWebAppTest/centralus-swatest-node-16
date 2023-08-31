module.exports = async function (context, req) {
  const date = "2023-08-31T07:08:17.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

