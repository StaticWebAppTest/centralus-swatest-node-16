module.exports = async function (context, req) {
  const date = "2022-11-17T22:10:39.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

