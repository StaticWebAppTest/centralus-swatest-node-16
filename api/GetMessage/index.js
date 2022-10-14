module.exports = async function (context, req) {
  const date = "2022-10-14T01:23:14.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

