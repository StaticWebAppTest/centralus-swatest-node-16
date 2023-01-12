module.exports = async function (context, req) {
  const date = "2023-01-12T00:51:43.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

