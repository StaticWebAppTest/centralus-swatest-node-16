module.exports = async function (context, req) {
  const date = "2022-05-01T20:11:23.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

