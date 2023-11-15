module.exports = async function (context, req) {
  const date = "2023-11-15T00:42:45.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

