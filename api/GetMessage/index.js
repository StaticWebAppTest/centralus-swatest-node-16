module.exports = async function (context, req) {
  const date = "2023-02-13T00:54:32.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

