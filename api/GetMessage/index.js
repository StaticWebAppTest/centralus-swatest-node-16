module.exports = async function (context, req) {
  const date = "2024-03-18T04:10:55.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

