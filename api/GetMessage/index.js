module.exports = async function (context, req) {
  const date = "2022-04-09T09:09:51.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

