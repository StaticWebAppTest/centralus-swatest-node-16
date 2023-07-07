module.exports = async function (context, req) {
  const date = "2023-07-07T20:10:22.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

