module.exports = async function (context, req) {
  const date = "2022-04-03T14:08:47.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

