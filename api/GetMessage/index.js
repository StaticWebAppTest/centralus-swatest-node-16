module.exports = async function (context, req) {
  const date = "2022-11-12T23:11:04.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

