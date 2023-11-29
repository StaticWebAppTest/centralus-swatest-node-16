module.exports = async function (context, req) {
  const date = "2023-11-29T23:09:05.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

