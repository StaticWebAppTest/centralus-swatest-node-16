module.exports = async function (context, req) {
  const date = "2022-06-02T21:10:05.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

