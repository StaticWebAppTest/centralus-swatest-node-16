module.exports = async function (context, req) {
  const date = "2023-02-23T04:12:32.459Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

