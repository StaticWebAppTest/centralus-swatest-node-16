module.exports = async function (context, req) {
  const date = "2022-07-20T20:12:14.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

