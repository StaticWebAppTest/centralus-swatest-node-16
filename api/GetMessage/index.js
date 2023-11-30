module.exports = async function (context, req) {
  const date = "2023-11-30T01:51:25.398Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

