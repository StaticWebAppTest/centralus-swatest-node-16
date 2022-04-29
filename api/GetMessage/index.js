module.exports = async function (context, req) {
  const date = "2022-04-29T04:24:23.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

