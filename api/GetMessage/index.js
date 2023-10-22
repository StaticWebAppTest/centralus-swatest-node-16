module.exports = async function (context, req) {
  const date = "2023-10-22T11:06:34.559Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

