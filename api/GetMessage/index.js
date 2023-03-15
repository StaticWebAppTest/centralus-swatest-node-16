module.exports = async function (context, req) {
  const date = "2023-03-15T04:12:01.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

