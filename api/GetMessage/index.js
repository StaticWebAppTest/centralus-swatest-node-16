module.exports = async function (context, req) {
  const date = "2022-02-28T15:15:16.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

