module.exports = async function (context, req) {
  const date = "2024-06-06T17:10:21.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

