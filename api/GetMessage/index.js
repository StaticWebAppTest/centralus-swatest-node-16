module.exports = async function (context, req) {
  const date = "2023-12-18T01:52:51.141Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

