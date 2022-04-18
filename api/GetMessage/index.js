module.exports = async function (context, req) {
  const date = "2022-04-18T17:16:49.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

