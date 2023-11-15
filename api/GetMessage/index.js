module.exports = async function (context, req) {
  const date = "2023-11-15T07:08:36.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

