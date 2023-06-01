module.exports = async function (context, req) {
  const date = "2023-06-01T03:06:37.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

