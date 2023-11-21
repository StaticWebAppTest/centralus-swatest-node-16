module.exports = async function (context, req) {
  const date = "2023-11-21T06:12:34.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

