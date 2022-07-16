module.exports = async function (context, req) {
  const date = "2022-07-16T12:17:01.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

