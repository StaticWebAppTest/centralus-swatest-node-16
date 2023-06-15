module.exports = async function (context, req) {
  const date = "2023-06-15T15:08:52.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

