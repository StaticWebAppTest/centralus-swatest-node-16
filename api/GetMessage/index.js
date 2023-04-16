module.exports = async function (context, req) {
  const date = "2023-04-16T12:15:32.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

