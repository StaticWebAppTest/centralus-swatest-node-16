module.exports = async function (context, req) {
  const date = "2022-07-24T07:09:57.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

