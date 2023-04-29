module.exports = async function (context, req) {
  const date = "2023-04-29T02:00:44.281Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

