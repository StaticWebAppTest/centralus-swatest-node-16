module.exports = async function (context, req) {
  const date = "2022-07-12T07:10:11.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

