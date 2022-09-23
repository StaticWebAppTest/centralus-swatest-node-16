module.exports = async function (context, req) {
  const date = "2022-09-23T11:10:48.016Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

