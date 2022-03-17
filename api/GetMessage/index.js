module.exports = async function (context, req) {
  const date = "2022-03-17T08:12:19.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

