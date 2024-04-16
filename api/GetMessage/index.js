module.exports = async function (context, req) {
  const date = "2024-04-16T07:10:40.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

