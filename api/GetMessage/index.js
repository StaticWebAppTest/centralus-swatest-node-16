module.exports = async function (context, req) {
  const date = "2022-04-19T14:10:30.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

