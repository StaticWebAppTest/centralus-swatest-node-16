module.exports = async function (context, req) {
  const date = "2022-10-14T10:14:56.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

