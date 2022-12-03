module.exports = async function (context, req) {
  const date = "2022-12-03T05:08:40.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

