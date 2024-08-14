module.exports = async function (context, req) {
  const date = "2024-08-14T14:10:30.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

