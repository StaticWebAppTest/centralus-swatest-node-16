module.exports = async function (context, req) {
  const date = "2024-04-18T09:10:08.000Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

