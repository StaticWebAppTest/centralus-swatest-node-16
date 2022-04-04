module.exports = async function (context, req) {
  const date = "2022-04-04T12:20:57.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

