module.exports = async function (context, req) {
  const date = "2023-10-22T10:08:18.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

