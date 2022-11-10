module.exports = async function (context, req) {
  const date = "2022-11-10T03:20:59.522Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

