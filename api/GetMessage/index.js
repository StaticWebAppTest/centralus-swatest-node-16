module.exports = async function (context, req) {
  const date = "2023-02-23T09:10:06.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

