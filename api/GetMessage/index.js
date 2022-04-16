module.exports = async function (context, req) {
  const date = "2022-04-16T23:10:19.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

