module.exports = async function (context, req) {
  const date = "2022-05-10T07:10:47.809Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

