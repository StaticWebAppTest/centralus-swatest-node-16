module.exports = async function (context, req) {
  const date = "2022-10-02T04:10:18.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

