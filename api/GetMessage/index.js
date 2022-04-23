module.exports = async function (context, req) {
  const date = "2022-04-23T05:09:23.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

