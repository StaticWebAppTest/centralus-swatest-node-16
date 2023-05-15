module.exports = async function (context, req) {
  const date = "2023-05-15T08:11:51.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

