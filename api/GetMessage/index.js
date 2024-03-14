module.exports = async function (context, req) {
  const date = "2024-03-14T04:10:53.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

