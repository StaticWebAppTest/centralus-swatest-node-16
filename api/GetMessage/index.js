module.exports = async function (context, req) {
  const date = "2022-12-27T09:09:11.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

