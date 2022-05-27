module.exports = async function (context, req) {
  const date = "2022-05-27T06:15:13.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

