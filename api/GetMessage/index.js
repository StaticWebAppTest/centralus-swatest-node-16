module.exports = async function (context, req) {
  const date = "2022-07-09T07:10:08.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

