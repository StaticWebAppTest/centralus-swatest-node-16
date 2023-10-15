module.exports = async function (context, req) {
  const date = "2023-10-15T13:08:47.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

