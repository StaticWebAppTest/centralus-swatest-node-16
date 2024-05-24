module.exports = async function (context, req) {
  const date = "2024-05-24T04:12:53.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

