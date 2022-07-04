module.exports = async function (context, req) {
  const date = "2022-07-04T05:23:06.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

