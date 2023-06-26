module.exports = async function (context, req) {
  const date = "2023-06-26T17:08:43.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

