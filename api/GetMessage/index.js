module.exports = async function (context, req) {
  const date = "2022-11-23T13:23:53.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

