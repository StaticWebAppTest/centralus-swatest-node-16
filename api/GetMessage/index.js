module.exports = async function (context, req) {
  const date = "2023-01-16T11:07:59.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

