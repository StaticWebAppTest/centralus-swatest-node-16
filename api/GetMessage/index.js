module.exports = async function (context, req) {
  const date = "2022-06-28T08:15:51.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

