module.exports = async function (context, req) {
  const date = "2022-10-14T17:25:56.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

