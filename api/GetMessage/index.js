module.exports = async function (context, req) {
  const date = "2023-09-06T14:08:21.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

