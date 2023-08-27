module.exports = async function (context, req) {
  const date = "2023-08-27T10:08:07.514Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

