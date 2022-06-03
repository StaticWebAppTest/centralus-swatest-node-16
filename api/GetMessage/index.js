module.exports = async function (context, req) {
  const date = "2022-06-03T12:19:32.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

