module.exports = async function (context, req) {
  const date = "2022-12-14T08:12:57.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

