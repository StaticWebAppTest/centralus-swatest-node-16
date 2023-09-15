module.exports = async function (context, req) {
  const date = "2023-09-15T23:08:06.228Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

