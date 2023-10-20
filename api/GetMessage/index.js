module.exports = async function (context, req) {
  const date = "2023-10-20T07:08:21.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

