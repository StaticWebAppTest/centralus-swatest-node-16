module.exports = async function (context, req) {
  const date = "2023-03-20T23:08:56.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

