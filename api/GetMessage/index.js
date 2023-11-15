module.exports = async function (context, req) {
  const date = "2023-11-15T15:09:40.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

