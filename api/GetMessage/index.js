module.exports = async function (context, req) {
  const date = "2022-10-05T01:15:36.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

