module.exports = async function (context, req) {
  const date = "2023-09-14T00:39:56.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

