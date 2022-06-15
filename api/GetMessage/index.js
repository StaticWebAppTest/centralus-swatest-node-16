module.exports = async function (context, req) {
  const date = "2022-06-15T08:14:45.006Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

