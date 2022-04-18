module.exports = async function (context, req) {
  const date = "2022-04-18T11:09:12.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

