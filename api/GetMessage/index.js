module.exports = async function (context, req) {
  const date = "2022-04-13T14:10:19.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

