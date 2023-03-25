module.exports = async function (context, req) {
  const date = "2023-03-25T10:08:54.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

