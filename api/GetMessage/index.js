module.exports = async function (context, req) {
  const date = "2023-02-22T15:10:37.128Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

