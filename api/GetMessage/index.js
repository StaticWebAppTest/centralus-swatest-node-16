module.exports = async function (context, req) {
  const date = "2023-09-22T11:07:22.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

