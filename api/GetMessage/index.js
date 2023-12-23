module.exports = async function (context, req) {
  const date = "2023-12-23T01:42:43.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

