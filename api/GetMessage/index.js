module.exports = async function (context, req) {
  const date = "2022-09-11T06:16:22.216Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

