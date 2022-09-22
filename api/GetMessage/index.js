module.exports = async function (context, req) {
  const date = "2022-09-22T14:20:50.492Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

