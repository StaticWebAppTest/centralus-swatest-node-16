module.exports = async function (context, req) {
  const date = "2022-09-28T08:18:46.400Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

