module.exports = async function (context, req) {
  const date = "2023-11-23T01:51:01.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

