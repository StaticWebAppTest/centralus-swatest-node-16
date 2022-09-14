module.exports = async function (context, req) {
  const date = "2022-09-14T07:27:42.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

