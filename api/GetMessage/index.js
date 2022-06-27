module.exports = async function (context, req) {
  const date = "2022-06-27T05:23:27.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

