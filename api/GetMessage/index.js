module.exports = async function (context, req) {
  const date = "2023-03-06T00:54:22.178Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

