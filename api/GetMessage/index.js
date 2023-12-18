module.exports = async function (context, req) {
  const date = "2023-12-18T09:09:59.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

