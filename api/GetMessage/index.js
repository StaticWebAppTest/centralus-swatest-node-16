module.exports = async function (context, req) {
  const date = "2023-08-11T21:06:51.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

