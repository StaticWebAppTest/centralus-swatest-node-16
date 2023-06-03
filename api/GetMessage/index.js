module.exports = async function (context, req) {
  const date = "2023-06-03T13:09:32.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

