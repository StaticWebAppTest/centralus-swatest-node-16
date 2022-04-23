module.exports = async function (context, req) {
  const date = "2022-04-23T07:10:33.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

