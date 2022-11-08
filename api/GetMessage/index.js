module.exports = async function (context, req) {
  const date = "2022-11-08T08:16:19.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

