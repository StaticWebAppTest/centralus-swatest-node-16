module.exports = async function (context, req) {
  const date = "2023-09-24T07:07:20.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

