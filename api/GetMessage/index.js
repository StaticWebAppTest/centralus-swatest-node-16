module.exports = async function (context, req) {
  const date = "2023-10-16T22:08:18.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

