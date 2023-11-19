module.exports = async function (context, req) {
  const date = "2023-11-19T19:06:50.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

