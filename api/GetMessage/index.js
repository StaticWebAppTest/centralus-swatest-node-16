module.exports = async function (context, req) {
  const date = "2023-02-06T00:49:45.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

