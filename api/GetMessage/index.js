module.exports = async function (context, req) {
  const date = "2023-01-14T08:11:45.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

