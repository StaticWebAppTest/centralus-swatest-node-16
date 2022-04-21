module.exports = async function (context, req) {
  const date = "2022-04-21T10:12:14.058Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

