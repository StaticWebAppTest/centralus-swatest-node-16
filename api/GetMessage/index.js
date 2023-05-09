module.exports = async function (context, req) {
  const date = "2023-05-09T02:01:32.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

