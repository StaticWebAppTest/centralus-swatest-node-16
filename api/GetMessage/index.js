module.exports = async function (context, req) {
  const date = "2023-04-03T07:08:45.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

