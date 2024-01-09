module.exports = async function (context, req) {
  const date = "2024-01-09T04:11:40.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

