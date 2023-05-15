module.exports = async function (context, req) {
  const date = "2023-05-15T23:08:31.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

