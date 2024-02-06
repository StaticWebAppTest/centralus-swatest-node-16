module.exports = async function (context, req) {
  const date = "2024-02-06T04:10:32.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

