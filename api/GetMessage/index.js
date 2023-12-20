module.exports = async function (context, req) {
  const date = "2023-12-20T22:08:28.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

