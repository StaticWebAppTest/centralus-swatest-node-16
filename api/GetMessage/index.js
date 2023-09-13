module.exports = async function (context, req) {
  const date = "2023-09-13T08:11:31.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

