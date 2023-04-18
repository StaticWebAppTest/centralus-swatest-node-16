module.exports = async function (context, req) {
  const date = "2023-04-18T04:10:53.326Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

