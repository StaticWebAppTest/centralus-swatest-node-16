module.exports = async function (context, req) {
  const date = "2023-03-09T06:13:49.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

