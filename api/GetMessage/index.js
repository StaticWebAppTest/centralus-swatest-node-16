module.exports = async function (context, req) {
  const date = "2022-04-21T17:20:32.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

