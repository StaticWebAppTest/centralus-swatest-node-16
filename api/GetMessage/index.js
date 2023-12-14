module.exports = async function (context, req) {
  const date = "2023-12-14T11:08:15.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

