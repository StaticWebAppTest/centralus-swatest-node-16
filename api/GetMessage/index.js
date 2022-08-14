module.exports = async function (context, req) {
  const date = "2022-08-14T09:10:45.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

