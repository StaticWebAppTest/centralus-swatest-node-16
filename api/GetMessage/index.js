module.exports = async function (context, req) {
  const date = "2022-08-28T16:13:51.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

