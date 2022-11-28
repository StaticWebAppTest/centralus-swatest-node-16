module.exports = async function (context, req) {
  const date = "2022-11-28T21:09:13.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

