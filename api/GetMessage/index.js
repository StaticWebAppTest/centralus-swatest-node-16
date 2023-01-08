module.exports = async function (context, req) {
  const date = "2023-01-08T06:11:23.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

