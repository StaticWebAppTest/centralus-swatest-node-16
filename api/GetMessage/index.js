module.exports = async function (context, req) {
  const date = "2022-07-23T19:09:06.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

