module.exports = async function (context, req) {
  const date = "2022-07-20T09:10:50.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

