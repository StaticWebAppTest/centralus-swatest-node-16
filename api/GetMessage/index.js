module.exports = async function (context, req) {
  const date = "2023-10-08T01:49:38.668Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

