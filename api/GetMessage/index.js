module.exports = async function (context, req) {
  const date = "2022-03-27T13:15:17.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

