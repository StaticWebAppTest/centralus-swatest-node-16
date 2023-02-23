module.exports = async function (context, req) {
  const date = "2023-02-23T06:13:06.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

