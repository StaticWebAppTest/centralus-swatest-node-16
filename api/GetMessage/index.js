module.exports = async function (context, req) {
  const date = "2022-10-19T06:08:03.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

