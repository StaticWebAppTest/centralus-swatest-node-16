module.exports = async function (context, req) {
  const date = "2022-09-21T11:11:16.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

