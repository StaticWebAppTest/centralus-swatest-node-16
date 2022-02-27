module.exports = async function (context, req) {
  const date = "2022-02-27T10:10:15.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

