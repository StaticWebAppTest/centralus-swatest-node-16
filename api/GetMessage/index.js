module.exports = async function (context, req) {
  const date = "2023-05-27T01:59:57.826Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

