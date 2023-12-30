module.exports = async function (context, req) {
  const date = "2023-12-30T10:08:43.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

