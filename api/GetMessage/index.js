module.exports = async function (context, req) {
  const date = "2022-07-30T00:57:07.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

