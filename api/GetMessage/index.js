module.exports = async function (context, req) {
  const date = "2022-10-07T13:47:06.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

