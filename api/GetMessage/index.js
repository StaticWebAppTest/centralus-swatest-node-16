module.exports = async function (context, req) {
  const date = "2022-07-18T17:19:23.905Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

