module.exports = async function (context, req) {
  const date = "2022-11-15T23:10:55.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

