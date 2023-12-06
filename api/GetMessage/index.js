module.exports = async function (context, req) {
  const date = "2023-12-06T00:44:06.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

