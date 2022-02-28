module.exports = async function (context, req) {
  const date = "2022-02-28T12:18:04.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

