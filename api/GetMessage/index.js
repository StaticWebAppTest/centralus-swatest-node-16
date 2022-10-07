module.exports = async function (context, req) {
  const date = "2022-10-07T01:20:28.003Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

