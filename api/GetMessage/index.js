module.exports = async function (context, req) {
  const date = "2023-09-17T12:14:40.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

