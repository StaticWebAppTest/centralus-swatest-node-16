module.exports = async function (context, req) {
  const date = "2022-09-16T20:13:08.322Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

