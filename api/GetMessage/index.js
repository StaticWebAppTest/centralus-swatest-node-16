module.exports = async function (context, req) {
  const date = "2024-10-24T20:12:53.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

