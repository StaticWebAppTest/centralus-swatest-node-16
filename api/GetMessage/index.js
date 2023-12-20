module.exports = async function (context, req) {
  const date = "2023-12-20T20:09:45.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

