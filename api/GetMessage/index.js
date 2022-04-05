module.exports = async function (context, req) {
  const date = "2022-04-05T06:13:28.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

