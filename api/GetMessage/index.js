module.exports = async function (context, req) {
  const date = "2022-10-21T08:18:16.441Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

