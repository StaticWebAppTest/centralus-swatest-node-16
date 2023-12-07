module.exports = async function (context, req) {
  const date = "2023-12-07T17:08:45.593Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

