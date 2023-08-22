module.exports = async function (context, req) {
  const date = "2023-08-22T01:40:54.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

