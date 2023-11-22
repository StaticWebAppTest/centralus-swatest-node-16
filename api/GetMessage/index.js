module.exports = async function (context, req) {
  const date = "2023-11-22T17:08:45.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

