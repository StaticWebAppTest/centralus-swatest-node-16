module.exports = async function (context, req) {
  const date = "2023-04-21T20:09:12.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

