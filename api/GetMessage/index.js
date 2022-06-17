module.exports = async function (context, req) {
  const date = "2022-06-17T20:09:57.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

