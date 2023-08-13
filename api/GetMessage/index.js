module.exports = async function (context, req) {
  const date = "2023-08-13T21:06:35.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

