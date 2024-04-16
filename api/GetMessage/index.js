module.exports = async function (context, req) {
  const date = "2024-04-16T17:09:10.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

