module.exports = async function (context, req) {
  const date = "2023-09-21T12:16:52.185Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

