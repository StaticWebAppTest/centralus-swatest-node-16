module.exports = async function (context, req) {
  const date = "2022-08-26T01:05:23.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

