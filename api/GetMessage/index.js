module.exports = async function (context, req) {
  const date = "2022-09-29T23:16:25.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

