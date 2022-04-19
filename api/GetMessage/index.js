module.exports = async function (context, req) {
  const date = "2022-04-19T17:18:27.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

