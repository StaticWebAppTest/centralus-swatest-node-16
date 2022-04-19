module.exports = async function (context, req) {
  const date = "2022-04-19T18:13:12.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

