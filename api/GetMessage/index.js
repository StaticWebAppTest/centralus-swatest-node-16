module.exports = async function (context, req) {
  const date = "2023-12-23T08:10:44.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

