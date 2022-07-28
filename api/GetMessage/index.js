module.exports = async function (context, req) {
  const date = "2022-07-28T01:00:33.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

