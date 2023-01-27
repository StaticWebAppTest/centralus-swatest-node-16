module.exports = async function (context, req) {
  const date = "2023-01-27T12:17:14.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

