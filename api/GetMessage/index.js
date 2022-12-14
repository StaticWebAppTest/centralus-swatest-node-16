module.exports = async function (context, req) {
  const date = "2022-12-14T11:08:16.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

