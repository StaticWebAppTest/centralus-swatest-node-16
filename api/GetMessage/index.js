module.exports = async function (context, req) {
  const date = "2022-10-04T18:23:55.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

