module.exports = async function (context, req) {
  const date = "2023-11-21T00:44:09.289Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

