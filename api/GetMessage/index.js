module.exports = async function (context, req) {
  const date = "2022-05-25T15:12:42.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

