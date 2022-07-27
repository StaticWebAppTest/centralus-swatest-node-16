module.exports = async function (context, req) {
  const date = "2022-07-27T08:13:46.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

