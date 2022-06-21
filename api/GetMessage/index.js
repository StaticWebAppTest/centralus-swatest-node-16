module.exports = async function (context, req) {
  const date = "2022-06-21T10:17:06.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

