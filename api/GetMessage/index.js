module.exports = async function (context, req) {
  const date = "2022-02-27T08:11:20.923Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

