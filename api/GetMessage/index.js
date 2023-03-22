module.exports = async function (context, req) {
  const date = "2023-03-22T16:12:22.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

