module.exports = async function (context, req) {
  const date = "2024-11-18T07:12:45.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

