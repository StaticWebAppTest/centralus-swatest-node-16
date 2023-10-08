module.exports = async function (context, req) {
  const date = "2023-10-08T03:08:43.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

