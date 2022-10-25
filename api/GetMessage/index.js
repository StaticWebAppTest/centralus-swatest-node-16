module.exports = async function (context, req) {
  const date = "2022-10-25T08:24:27.711Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

