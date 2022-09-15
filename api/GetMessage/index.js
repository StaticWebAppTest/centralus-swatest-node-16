module.exports = async function (context, req) {
  const date = "2022-09-15T19:10:19.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

