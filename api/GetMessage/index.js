module.exports = async function (context, req) {
  const date = "2023-01-15T04:11:13.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

