module.exports = async function (context, req) {
  const date = "2023-11-19T20:09:12.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

