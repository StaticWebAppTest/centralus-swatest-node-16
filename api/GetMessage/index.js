module.exports = async function (context, req) {
  const date = "2022-11-25T08:13:19.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

