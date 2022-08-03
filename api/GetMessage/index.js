module.exports = async function (context, req) {
  const date = "2022-08-03T09:10:35.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

