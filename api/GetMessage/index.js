module.exports = async function (context, req) {
  const date = "2023-10-15T06:11:08.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

