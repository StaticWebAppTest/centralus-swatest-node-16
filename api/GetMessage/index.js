module.exports = async function (context, req) {
  const date = "2024-12-27T17:09:45.720Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

