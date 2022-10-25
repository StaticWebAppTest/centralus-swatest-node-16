module.exports = async function (context, req) {
  const date = "2022-10-25T10:17:11.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

