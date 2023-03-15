module.exports = async function (context, req) {
  const date = "2023-03-15T23:08:03.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

