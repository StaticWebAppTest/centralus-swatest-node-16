module.exports = async function (context, req) {
  const date = "2023-05-21T14:07:28.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

