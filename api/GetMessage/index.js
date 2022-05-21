module.exports = async function (context, req) {
  const date = "2022-05-21T08:13:40.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

