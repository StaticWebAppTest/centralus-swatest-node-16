module.exports = async function (context, req) {
  const date = "2023-09-18T01:42:44.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

