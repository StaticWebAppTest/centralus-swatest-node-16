module.exports = async function (context, req) {
  const date = "2023-08-07T23:08:05.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

