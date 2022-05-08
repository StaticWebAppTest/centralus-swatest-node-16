module.exports = async function (context, req) {
  const date = "2022-05-08T04:15:57.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

