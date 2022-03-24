module.exports = async function (context, req) {
  const date = "2022-03-24T08:12:33.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

