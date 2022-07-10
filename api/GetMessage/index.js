module.exports = async function (context, req) {
  const date = "2022-07-10T05:11:33.772Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

