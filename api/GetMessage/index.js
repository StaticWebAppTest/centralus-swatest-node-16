module.exports = async function (context, req) {
  const date = "2024-07-06T01:54:35.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

