module.exports = async function (context, req) {
  const date = "2023-05-21T17:06:59.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

