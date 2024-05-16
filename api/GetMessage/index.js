module.exports = async function (context, req) {
  const date = "2024-05-16T11:08:32.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

