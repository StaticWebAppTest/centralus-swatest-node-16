module.exports = async function (context, req) {
  const date = "2023-01-22T09:08:36.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

