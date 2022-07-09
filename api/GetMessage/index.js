module.exports = async function (context, req) {
  const date = "2022-07-09T17:10:33.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

