module.exports = async function (context, req) {
  const date = "2022-03-22T13:18:57.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

