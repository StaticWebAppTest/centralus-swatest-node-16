module.exports = async function (context, req) {
  const date = "2023-04-27T17:07:55.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

