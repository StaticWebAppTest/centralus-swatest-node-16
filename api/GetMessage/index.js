module.exports = async function (context, req) {
  const date = "2023-03-10T04:12:31.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

