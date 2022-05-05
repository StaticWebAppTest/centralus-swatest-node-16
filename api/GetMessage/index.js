module.exports = async function (context, req) {
  const date = "2022-05-05T20:16:13.292Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

