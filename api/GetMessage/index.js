module.exports = async function (context, req) {
  const date = "2023-12-15T23:09:19.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

