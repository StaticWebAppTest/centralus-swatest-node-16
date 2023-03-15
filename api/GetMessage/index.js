module.exports = async function (context, req) {
  const date = "2023-03-15T12:18:40.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

