module.exports = async function (context, req) {
  const date = "2023-12-08T06:12:31.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

