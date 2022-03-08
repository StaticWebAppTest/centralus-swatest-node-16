module.exports = async function (context, req) {
  const date = "2022-03-08T23:09:50.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

