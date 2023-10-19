module.exports = async function (context, req) {
  const date = "2023-10-19T22:08:05.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

