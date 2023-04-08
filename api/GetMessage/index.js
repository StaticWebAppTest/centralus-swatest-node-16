module.exports = async function (context, req) {
  const date = "2023-04-08T16:10:13.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

