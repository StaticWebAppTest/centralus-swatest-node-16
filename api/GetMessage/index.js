module.exports = async function (context, req) {
  const date = "2023-07-28T13:12:24.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

