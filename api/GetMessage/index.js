module.exports = async function (context, req) {
  const date = "2022-11-13T07:10:15.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

