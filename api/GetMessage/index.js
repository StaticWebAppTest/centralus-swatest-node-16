module.exports = async function (context, req) {
  const date = "2024-03-17T04:11:10.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

