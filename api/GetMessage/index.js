module.exports = async function (context, req) {
  const date = "2022-11-27T06:13:01.862Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

