module.exports = async function (context, req) {
  const date = "2022-08-27T05:25:45.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

