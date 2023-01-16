module.exports = async function (context, req) {
  const date = "2023-01-16T14:09:20.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

