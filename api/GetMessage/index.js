module.exports = async function (context, req) {
  const date = "2023-07-16T20:09:28.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

