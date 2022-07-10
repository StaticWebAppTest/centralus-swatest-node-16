module.exports = async function (context, req) {
  const date = "2022-07-10T12:18:06.760Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

