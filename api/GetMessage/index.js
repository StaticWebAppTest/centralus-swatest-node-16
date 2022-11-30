module.exports = async function (context, req) {
  const date = "2022-11-30T14:09:28.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

