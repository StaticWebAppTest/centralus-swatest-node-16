module.exports = async function (context, req) {
  const date = "2022-11-08T20:13:30.995Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

