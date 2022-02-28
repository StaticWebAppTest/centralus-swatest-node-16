module.exports = async function (context, req) {
  const date = "2022-02-28T07:10:00.239Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

