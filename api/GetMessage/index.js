module.exports = async function (context, req) {
  const date = "2023-11-09T17:08:16.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

