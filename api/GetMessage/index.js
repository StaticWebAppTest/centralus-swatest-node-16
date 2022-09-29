module.exports = async function (context, req) {
  const date = "2022-09-29T08:19:40.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

