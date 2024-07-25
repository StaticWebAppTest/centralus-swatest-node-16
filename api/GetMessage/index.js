module.exports = async function (context, req) {
  const date = "2024-07-25T01:59:50.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

