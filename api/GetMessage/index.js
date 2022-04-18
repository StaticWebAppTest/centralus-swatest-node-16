module.exports = async function (context, req) {
  const date = "2022-04-18T15:10:24.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

