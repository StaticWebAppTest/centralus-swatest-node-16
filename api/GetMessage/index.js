module.exports = async function (context, req) {
  const date = "2022-09-08T11:10:45.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

