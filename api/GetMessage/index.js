module.exports = async function (context, req) {
  const date = "2022-11-16T08:15:44.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

