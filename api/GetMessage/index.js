module.exports = async function (context, req) {
  const date = "2022-05-04T20:12:11.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

