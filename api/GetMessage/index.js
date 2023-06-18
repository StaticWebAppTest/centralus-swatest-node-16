module.exports = async function (context, req) {
  const date = "2023-06-18T00:59:53.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

