module.exports = async function (context, req) {
  const date = "2023-11-16T17:08:36.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

