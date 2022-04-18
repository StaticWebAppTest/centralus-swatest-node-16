module.exports = async function (context, req) {
  const date = "2022-04-18T14:10:14.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

