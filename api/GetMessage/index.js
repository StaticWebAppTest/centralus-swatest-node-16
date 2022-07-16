module.exports = async function (context, req) {
  const date = "2022-07-16T05:10:48.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

