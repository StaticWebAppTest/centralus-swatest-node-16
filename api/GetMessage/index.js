module.exports = async function (context, req) {
  const date = "2022-10-22T14:14:43.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

