module.exports = async function (context, req) {
  const date = "2023-02-23T19:08:12.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

