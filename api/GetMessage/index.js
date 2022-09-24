module.exports = async function (context, req) {
  const date = "2022-09-24T13:29:43.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

