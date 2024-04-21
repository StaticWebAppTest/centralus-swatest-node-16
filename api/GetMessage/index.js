module.exports = async function (context, req) {
  const date = "2024-04-21T07:09:10.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

