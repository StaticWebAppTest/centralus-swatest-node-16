module.exports = async function (context, req) {
  const date = "2023-09-15T13:11:02.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

