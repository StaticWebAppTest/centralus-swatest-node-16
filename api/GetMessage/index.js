module.exports = async function (context, req) {
  const date = "2022-12-15T11:08:11.004Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

