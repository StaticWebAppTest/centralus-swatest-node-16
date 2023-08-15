module.exports = async function (context, req) {
  const date = "2023-08-15T04:10:05.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

