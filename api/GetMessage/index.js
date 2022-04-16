module.exports = async function (context, req) {
  const date = "2022-04-16T08:12:50.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

