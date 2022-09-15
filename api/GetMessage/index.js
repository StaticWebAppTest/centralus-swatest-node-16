module.exports = async function (context, req) {
  const date = "2022-09-15T12:27:23.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

