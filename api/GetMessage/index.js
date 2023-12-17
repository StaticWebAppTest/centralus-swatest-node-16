module.exports = async function (context, req) {
  const date = "2023-12-17T13:09:28.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

