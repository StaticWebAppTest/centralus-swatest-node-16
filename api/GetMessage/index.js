module.exports = async function (context, req) {
  const date = "2023-11-14T12:16:50.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

