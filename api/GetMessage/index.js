module.exports = async function (context, req) {
  const date = "2022-10-14T04:19:05.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

