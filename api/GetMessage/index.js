module.exports = async function (context, req) {
  const date = "2022-06-10T20:10:57.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

