module.exports = async function (context, req) {
  const date = "2023-08-03T07:08:14.104Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

