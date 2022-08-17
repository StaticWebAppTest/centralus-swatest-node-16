module.exports = async function (context, req) {
  const date = "2022-08-17T01:06:23.491Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

