module.exports = async function (context, req) {
  const date = "2024-06-11T05:11:12.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

