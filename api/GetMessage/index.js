module.exports = async function (context, req) {
  const date = "2023-09-25T07:08:37.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

