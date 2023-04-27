module.exports = async function (context, req) {
  const date = "2023-04-27T07:08:48.145Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

