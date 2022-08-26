module.exports = async function (context, req) {
  const date = "2022-08-26T09:11:01.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

