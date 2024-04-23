module.exports = async function (context, req) {
  const date = "2024-04-23T03:10:10.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

