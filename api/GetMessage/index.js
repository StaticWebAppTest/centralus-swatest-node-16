module.exports = async function (context, req) {
  const date = "2023-03-27T09:10:37.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

