module.exports = async function (context, req) {
  const date = "2022-07-15T11:08:59.347Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

