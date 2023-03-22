module.exports = async function (context, req) {
  const date = "2023-03-22T17:08:15.672Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

