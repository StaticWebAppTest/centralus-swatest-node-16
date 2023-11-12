module.exports = async function (context, req) {
  const date = "2023-11-12T04:10:38.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

