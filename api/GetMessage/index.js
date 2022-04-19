module.exports = async function (context, req) {
  const date = "2022-04-19T20:12:22.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

