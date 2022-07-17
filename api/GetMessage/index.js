module.exports = async function (context, req) {
  const date = "2022-07-17T09:10:20.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

