module.exports = async function (context, req) {
  const date = "2022-07-25T12:23:08.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

