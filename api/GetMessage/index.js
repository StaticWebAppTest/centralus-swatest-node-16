module.exports = async function (context, req) {
  const date = "2022-10-17T08:27:46.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

