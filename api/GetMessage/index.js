module.exports = async function (context, req) {
  const date = "2023-12-21T06:12:25.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

