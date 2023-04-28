module.exports = async function (context, req) {
  const date = "2023-04-28T15:08:49.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

