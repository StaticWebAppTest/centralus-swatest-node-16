module.exports = async function (context, req) {
  const date = "2023-07-09T03:01:33.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

