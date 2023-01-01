module.exports = async function (context, req) {
  const date = "2023-01-01T12:16:14.578Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

