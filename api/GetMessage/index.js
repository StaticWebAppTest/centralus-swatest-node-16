module.exports = async function (context, req) {
  const date = "2022-12-05T15:10:36.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

