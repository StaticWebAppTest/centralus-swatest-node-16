module.exports = async function (context, req) {
  const date = "2023-08-10T00:49:31.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

