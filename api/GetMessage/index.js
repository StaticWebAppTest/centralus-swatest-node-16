module.exports = async function (context, req) {
  const date = "2023-07-13T10:10:36.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

