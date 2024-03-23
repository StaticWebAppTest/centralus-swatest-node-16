module.exports = async function (context, req) {
  const date = "2024-03-23T01:38:51.476Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

