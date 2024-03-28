module.exports = async function (context, req) {
  const date = "2024-03-28T13:09:28.034Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

