module.exports = async function (context, req) {
  const date = "2024-04-04T04:12:08.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

