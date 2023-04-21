module.exports = async function (context, req) {
  const date = "2023-04-21T06:12:16.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

