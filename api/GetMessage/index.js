module.exports = async function (context, req) {
  const date = "2022-10-27T06:15:58.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

