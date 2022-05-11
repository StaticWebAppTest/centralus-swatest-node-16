module.exports = async function (context, req) {
  const date = "2022-05-11T04:29:31.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

