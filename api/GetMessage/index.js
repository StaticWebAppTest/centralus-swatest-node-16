module.exports = async function (context, req) {
  const date = "2023-07-31T13:14:02.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

