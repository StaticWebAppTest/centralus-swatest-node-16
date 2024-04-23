module.exports = async function (context, req) {
  const date = "2024-04-23T01:48:12.275Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

