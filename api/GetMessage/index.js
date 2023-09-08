module.exports = async function (context, req) {
  const date = "2023-09-08T16:11:02.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

